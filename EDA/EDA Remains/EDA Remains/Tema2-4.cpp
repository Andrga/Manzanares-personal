// Nombre del alumno .....
// Usuario del Juez ......


#include <iostream>
#include <iomanip>
#include <fstream>
#include <vector>
using namespace std;
/*
bool caucasico(const vector<int>& v, int ini, int fin, int& npar) {
	// longitud vector
	int n = fin - ini;
	//casos base
	// si solo hay un elemento es caucasico y devuelve si es par o no
	if (n == 1) {
		if (v[ini] % 2 == 0)
			npar = 1;
		else
			npar = 0;

		return true;
	}

	int mitad = (fin + ini) / 2,
		nparIzq, nparDer;
	bool
		caucasicoIzq = caucasico(v, ini, mitad, nparIzq),
		caucasicoDer = caucasico(v, mitad, fin, nparDer);
	npar = nparDer + nparIzq;

	return caucasicoIzq && caucasicoDer && abs(nparDer - nparIzq) <= 2;
}


// función que resuelve el problema
bool resolver(const vector<int>& v) {
	int npar = 0;

	return caucasico(v, 0, v.size(), npar);
}

// Resuelve un caso de prueba, leyendo de la entrada la
// configuración, y escribiendo la respuesta
bool resuelveCaso() {
	// leer los datos de la entrada
	int n;
	cin >> n;
	if (n == 0)
		return false;

	vector<int> v(n);
	for (int& e : v)
		cin >> e;

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
*/