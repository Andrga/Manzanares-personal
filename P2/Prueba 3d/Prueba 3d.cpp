#include <iostream>
#include <SDL.h>

// Globals
int				gScreenHeight = 640;
int				gScreenWidth = 480;
SDL_Window*		gGraphicsAppWindow = nullptr;
SDL_GLContext*	gOpenGlContext = nullptr;


void initProgram() {
	if (SDL_Init(SDL_INIT_VIDEO) < 0)
	{
		SDL_Log("Not initialize");
		exit(1);
	}
	gGraphicsAppWindow = SDL_CreateWindow("Prueba 3D", 0, 0, gScreenWidth, gScreenHeight, SDL_WINDOW_OPENGL);
};



int main()
{
	std::cout << "Hello World!\n";

	initProgram();
	SDL_QUIT();
}