package main

import (
	"fmt"
	"net/http"

	_ "net/http/pprof"
)

func main() {
	fmt.Println("hello")
	static := http.Dir("web/dist")

	http.Handle("/", http.FileServer(static))
	http.ListenAndServe("localhost:8000", nil)
}
