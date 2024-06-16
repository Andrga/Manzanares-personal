// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>

using namespace std;
/*
// función que resuelve el problema
bool resolver(const vector<int>& v) {
	int i = 0;
	bool creciente = true, decreciente = true;

	// hasta size-1 porque accedemos al elemento siguiente dentro del bucle
	while (i < v.size() - 1)
	{
		// si el elemento i es mayor o igual que su siguiente no sera creciente
		if (creciente && v[i] >= v[i + 1])
			creciente = false;
		// su el elemento i es menor o igual que su siguiente no sera decreciente
		if (decreciente && v[i] <= v[i + 1])
			decreciente = false;

		i++;
	}

	// si es creciente o decreciente sera dalton
	return creciente || decreciente;
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
bool resuelveCaso() {
	// leer los datos de la entrada
	int hermanos = 0;

	std::cin >> hermanos;

	// si hay hermanos
	if (hermanos == 0)
		return false;

	// Recoge alturas
	std::vector<int> alturas(hermanos);

	for (int& e : alturas) {
		std::cin >> e;
	}

	// escribir sol
	resolver(alturas) ?
		std::cout << "DALTON" << std::endl :
		std::cout << "DESCONOCIDO" << std::endl;

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
}
*/