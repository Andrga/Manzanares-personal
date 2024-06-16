// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>
using namespace std;

bool parcialmenteOrdenado(const vector<int>& v, int ini, int fin, int& min, int& max) {
	int n = fin - ini;
	//casos base:
	// si solo hay un elemento el array esta ordenado
	if (n == 1)
		return true;
	// si hay dos elementos y el de la izquierda es menor o igual que el de la derecha, esta ordenado
	if (n == 2) {
		min = v[ini];
		max = v[ini + 1];
		return min <= max;
	}

	int mitad = (ini + fin) / 2;
	int minI, minD, maxI, maxD;
	bool ordIzq = parcialmenteOrdenado(v, ini, mitad, minI, maxI),
		ordDer = parcialmenteOrdenado(v, mitad, fin, minD, maxD);

	min = std::min(minI, minD);
	max = std::max(maxI, maxD);

	return ordIzq && ordDer && (minI <= minD) && (maxI <= maxD);


}

// función que resuelve el problema
bool resolver(vector<int>& v) {
	int min, max;

	return parcialmenteOrdenado(v, 0, v.size(), min, max);
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
bool resuelveCaso() {
	// leer los datos de la entrada
	int c;
	cin >> c;
	if (c == 0)
		return false;
	vector<int> v;

	//guarda los datos en el vector
	while (c != 0)
	{
		v.push_back(c);
		cin >> c;
	}

	//Escribe solucion
	resolver(v) ? cout << "SI\n" : cout << "NO\n";

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
