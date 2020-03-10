export interface IPizzaProps {
    fetchPizzaRecipes?(): void
    addTopping?(toppingKey: number, pizzaKey): void
    setSelectedPizza?(key: number): void
}

export interface IPizzaToppings {
    name: string
    isAdded: boolean
    category: string
    price: number
}

export interface IPizza {
    id: string
    Name: string
    Price: number
    Toppings: IPizzaToppings[]

}

export interface InitialState extends IPizzaProps {
    customerInfo: any
    pizzas: IPizza[]
    selectedPizza: IPizza
    router: any
}