package main

import (
	"fmt"
	"reflect"
)


type iGun interface {
	setName(name string)
	setPower(power int)
	getName() string
	getPower() int
}
var instance *iGun

func newGun() *iGun{
	if instance == nil{
		instance = new(iGun)
	}
	return instance
}

type gunData struct {
	name  string
	power int
}
type ak47 struct {
	gunData
}
type maverick struct {
	gunData
}
func (g *gunData) setName(name string) {
	g.name = name
}
func (g *gunData) getName() string {
	return g.name
}
func (g *gunData) setPower(power int) {
	g.power = power
}
func (g *gunData) getPower() int {
	return g.power
}
func newAk47() iGun {
	return &ak47{
		gunData: gunData{
			name:  "AK47 gun",
			power: 4,
		},
	}
}
func newMaverick() iGun {
	return &maverick{
		gunData: gunData{
			name:  "Maverick gun",
			power: 5,
		},
	}
}
func getGun(gunType string) (iGun, error) {
	if gunType == "ak47" {
		return newAk47(), nil
	}
	if gunType == "maverick" {
		return newMaverick(), nil
	}
	return nil, fmt.Errorf("Wrong gun type passed!")
}
func printDetails(g iGun ){
	t := reflect.TypeOf(g)
	k := t.Kind()
	//t2 := reflect.TypeOf(m)
	//k2 := t.Kind()

	fmt.Println("Kind of detail:", k)
	fmt.Printf("Gun: %s", g.getName())
	fmt.Println()
	fmt.Printf("Power: %d", g.getPower())
	fmt.Println()


	if reflect.ValueOf(g).Kind() == reflect.Struct {
		value := reflect.ValueOf(g)
		numberOfFields := value.NumField()
		for g := 0; g < numberOfFields; g++{
			fmt.Printf("%d.Type:%T || Value:%#v\n",(g + 1), value.Field(g), value.Field(g))

			fmt.Println("Kind is ", value.Field(g).Kind())
		}
	}
	//value := reflect.ValueOf(m)
	//fmt.Printf("The Value of the other gun is "+
	//	"%#v", value)
}
func main() {
	ak47, _ := getGun("ak47")
	maverick, _ := getGun("maverick")
	printDetails(ak47)
	printDetails(maverick)

}

