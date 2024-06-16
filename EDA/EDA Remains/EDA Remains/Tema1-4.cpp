#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

/*

bool anagramas(const string& cad1, const string& cad2) {

	if (cad1.size() != cad2.size())
		return false;

	vector<int> aux1(25, 0);
	vector<int> aux2(25, 0);

	// añade 1 a la posicion de cada letra en cada array auxiliar segun se usan
	for (unsigned int i = 0; i < cad1.size(); i++)
		aux1[cad1[i] - 'a']++;
	for (unsigned int i = 0; i < cad1.size(); i++)
		aux2[cad2[i] - 'a']++;

	//comprueba que los arrays auxiliares tienen los mismos elementos de cada letra
	bool anagrama = true;
	int i = 0;
	while (anagrama && i < aux1.size())
	{
		if (aux1[i] != aux2[i])
			anagrama = false;
		i++;
	}

	return anagrama;
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
void resuelveCaso() {
	// leer los datos de la entrada
	string word1, word2;
	cin >> word1 >> word2;
	cout << (anagramas(word1, word2) ? "SI" : "NO") << endl;
}

//#define DOMJUDGE
int main() {
	// Para la entrada por fichero.
	// Comentar para acepta el reto
#ifndef DOMJUDGE
	std::ifstream in("datos.txt");
	auto cinbuf = std::cin.rdbuf(in.rdbuf()); //save old buf and redirect std::cin to casos.txt
#endif

	int numCasos;
	std::cin >> numCasos;
	for (int i = 0; i < numCasos; ++i)
		resuelveCaso();

	// Para restablecer entrada. Comentar para acepta el reto
#ifndef DOMJUDGE // para dejar todo como estaba al principio
	std::cin.rdbuf(cinbuf);
	//system("PAUSE");
#endif

	return 0;
}*/