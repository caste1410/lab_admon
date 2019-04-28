package main

import (
	"fmt"
	"math/rand"
	"time"
)

func holaMundo() string {
	return "Hola Mundo"
}
func makeArray(n int) []float64 {
	vector := make([]float64, n, n)
	return vector
}

func makeRandomArray(n int) []float64 {
	vector := makeArray(n)
	for i := 0; i < n; i++ {
		vector[i] = float64(rand.Intn(i + 10))
	}
	return vector
}
func makeZeroMatrix(n int) [][]float64 {
	matrix := make([][]float64, n)
	for i := 0; i < n; i++ {
		matrix[i] = makeArray(n)
	}
	return matrix
}
func makeRandomMatrix(n int) [][]float64 {
	matrix := make([][]float64, n)
	for i := 0; i < n; i++ {
		matrix[i] = makeRandomArray(n)
	}
	return matrix
}

func multiplyMatrixVector(m [][]float64, v []float64) []float64 {
	vectorSize := len(v)
	answer := makeArray(vectorSize)
	for i := 0; i < vectorSize; i++ {
		for j := 0; j < vectorSize; j++ {
			answer[i] += m[i][j] * v[j]
		}
	}
	return answer
}

func solveEcuationSystem(m [][]float64, v []float64) []float64 {
	vectorSize := len(v)
	answer := makeArray(vectorSize)
	return answer
}

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Println(holaMundo())
	x := makeRandomMatrix(3)
	y := makeRandomArray(3)
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(multiplyMatrixVector(x, y))
}
