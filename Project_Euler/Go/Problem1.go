package main

import "fmt"

func is(num int ,max int) int {
	sum := 0
	for i := 0; i < max; i++{
		if  i%num == 0 {
			sum += i
		}
	}
	return sum
}
func not(a int, b int, max int) int{
	sum := 0
	for i := 0; i < max; i++{
		if  i%a == 0 && i%b ==0 {
			sum -= i
		}
	}
	return sum
}

func main(){
	max := 1000
	sum := is(3,max)
	sum += is(5,max)
	sum += not(3,5,max)
	fmt.Println(sum)
}
