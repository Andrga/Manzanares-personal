// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>
using namespace std;

// función que resuelve el problema
void resolver(const vector<int>& v, int a, int& min, int& max) {
	int  cantMax = 0, cantAct = 0;

	for (int i = 0; i < v.size(); i++)
	{
		//compara si el edificio es de altura correcta y suma uno a la cadena
		if (v[i] > a) {
			cantAct++;
		}
		else
		{
			cantAct = 0;
		}

		//si la cadena actual es mayor a la guardada actualiza la guardada como la actual
		if (cantAct > cantMax) {
			cantMax = cantAct;

			min = i - cantMax + 1;
			max = i;
		}
	}
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
void resuelveCaso() {
	// leer los datos de la entrada
	int n, a, min = 0, max = 0;
	cin >> n >> a;

	// vector de datos
	vector<int> v(n);

	for (int& e : v) {
		cin >> e;
	}


	resolver(v, a, min, max);
	// escribir sol
	cout << min << " " << max << endl;

}

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
	system("PAUSE");
#endif

	return 0;
}