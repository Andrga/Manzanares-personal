// Nombre del alumno .....
// Usuario del Juez ......
/*
#include <iostream>
#include <vector>
#include <fstream>

using namespace std;

// Función que verifica si el vector está bien dividido.
bool estaBienDividido(const vector<int>& vec, int p) {
	bool div = true;
	int maxIzquierda = vec[0];
	for (int i = 1; i <= p; ++i) {
		if (vec[i] > maxIzquierda) {
			maxIzquierda = vec[i];
		}
	}
	int i = p + 1;
	while (div && i < vec.size())
	{
		if (vec[i] <= maxIzquierda) {
			div = false;
		}
		i++;
	}

	return div;
}

bool resuelveCaso() {
	int n, p;
	cin >> n >> p;

	if (!cin) return false;

	vector<int> vec(n);
	for (int i = 0; i < n; ++i) {
		cin >> vec[i];
	}

	if (estaBienDividido(vec, p)) {
		cout << "SI" << endl;
	}
	else {
		cout << "NO" << endl;
	}

	return true;
}

int main() {
	// Para la entrada por fichero.
	// Comentar para acepta el reto
#ifndef DOMJUDGE
	std::ifstream in("datos.txt");
	auto cinbuf = std::cin.rdbuf(in.rdbuf()); // save old buf and redirect std::cin to datos.txt
#endif 

	int numCasos;
	std::cin >> numCasos;
	for (int i = 0; i < numCasos; ++i)
		resuelveCaso();

	// Para restablecer entrada. Comentar para acepta el reto
#ifndef DOMJUDGE // para dejar todo como estaba al principio
	std::cin.rdbuf(cinbuf);
	system("PAUSE");
#endif

	return 0;
}
*/