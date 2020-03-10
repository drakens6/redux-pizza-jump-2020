import { environment as env } from '../environment/environment'
import { IPizza } from '../models/store.model'

export class NetworkUtility {
    public static async fetchPizzaRecipes(): Promise<IPizza[]> {

        try {

            const response = await fetch(`${env.apiUrl}/api/pizza`, { method: 'GET' })

            const result = await response.json()

            return result

        } catch (error) {

            throw error
            
        }

    }
}