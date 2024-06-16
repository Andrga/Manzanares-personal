// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;
/*
int complementarioDigito(int n) {
	return 9 - n;
}

// función que resuelve el problema
int complementarios(int n) {
	if (n <= 9) {
		return complementarioDigito(n);
	}
	//calculo el complementario
	int comp = complementarios(n / 10);
	//reordeno el complementario
	return (comp * 10) + complementarioDigito(n % 10);
}

pair<int, int> inverso(int n) {
	if (n <= 9) {
		return { complementarioDigito(n),10 };
	}
	//calculo el complementario
	auto result = inverso(n / 10);
	int comp = result.first;
	int pos = result.second;
	//reordeno el complementario
	return { (complementarioDigito(n % 10) * pos) + (comp),pos * 10 };
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
void resuelveCaso() {
	// leer los datos de la entrada
	int n;
	cin >> n;

	// escribir sol
	cout << complementarios(n) << " " << inverso(n).first << endl;

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
}*/