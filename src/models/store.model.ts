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
    Total?: number
    CreatedOn?: string
    EditedOn?: string

}

export interface InitialState extends IPizzaProps {
    customerInfo: any
    pizzas: IPizza[]
    cart: IPizza[]
    selectedPizza: IPizza
    router: any
}