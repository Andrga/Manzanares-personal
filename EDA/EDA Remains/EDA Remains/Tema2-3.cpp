// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>
using namespace std;
/*
bool comprobar(const vector<int>& v, int k, int ini, int fin) {
	int n = fin - ini;

	// caso base n=1
	if (n == 1)
		return true;
	// caso base n=2
	if (n == 2) {
		return (abs(v[ini + 1] - v[ini]) >= k);
	}

	int mitad = (fin + ini) / 2;
	bool dispIzq = comprobar(v, k, ini, mitad),
		dispDer = comprobar(v, k, mitad, fin);
	int dif = abs(v[fin - 1] - v[ini]);

	return  dispIzq && dispDer && dif >= k;
}

// función que resuelve el problema
bool resolver(const vector<int>& v, int k) {

	return comprobar(v, k, 0, v.size());
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
bool resuelveCaso() {
	// leer los datos de la entrada
	int n, k;
	cin >> n >> k;

	if (!std::cin)
		return false;


	vector<int> v(n);
	for (int& e : v) {
		cin >> e;
	}

	//Escribe solucion
	resolver(v, k) ? cout << "SI\n" : cout << "NO\n";

	return true;

}

int main() {
	// Para la entrada por fichero.
	// Comentar para acepta el reto
#ifndef DOMJUDGE
	std::ifstream in("datos.txt");
	auto cinbuf = std::cin.rdbuf(in.rdbuf()); //save old buf and redirect std::cin to casos.txt
#endif 


	while (resuelveCaso())
		;


	// Para restablecer entrada. Comentar para acepta el reto
#ifndef DOMJUDGE // para dejar todo como estaba al principio
	std::cin.rdbuf(cinbuf);
	system("PAUSE");
#endif

	return 0;
}*/