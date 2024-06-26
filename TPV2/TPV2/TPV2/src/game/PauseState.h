// This file is part of the course TPV2@UCM - Samir Genaim

#pragma once
#include <SDL_rect.h>

#include "GameState.h"

class Texture;
class InputHandler;

class PauseState : public GameState {
public:
	PauseState();
	virtual ~PauseState();
	void enter() override;
	void leave() override;
	void update() override;

private:
	Texture* messageTexture;
	SDL_Rect messageRect;
	InputHandler& ihdlr; // Referencia al InputHandler.
};