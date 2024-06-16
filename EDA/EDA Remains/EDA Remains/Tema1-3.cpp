// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>
/*
// función que resuelve el problema
bool resolver(std::vector<int>& datos, int p, int n) {
	if (p == n - 1)
		return true;

	int maxIzq = 0, minDer = datos[p + 1];

	// maximo por la izquierda
	for (int i = 0; i <= p; i++)
	{
		if (maxIzq <= datos[i])
			maxIzq = datos[i];
	}

	//minimo por la derecha
	for (int i = n - 1; i > p; i--)
	{
		if (minDer >= datos[i])
			minDer = datos[i];
	}

	return maxIzq < minDer;
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
void resuelveCaso() {
	// leer los datos de la entrada
	int n = 0, p = 0;

	std::cin >> n >> p;

	//vector de datos
	std::vector<int> datos(n);

	//guarda los datos en el vector
	for (int i = 0; i < n; ++i) {
		std::cin >> datos[i];
	}

	if (resolver(datos, p, n)) {
		std::cout << "SI" << std::endl;
	}
	else {
		std::cout << "NO" << std::endl;
	}
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