import ordersQuery from '@/graphql/orders.graphql?raw'
import type { OrdersQuery } from '@/generated/graphql'

export const usePayloadOrders = async () => {
  const userStore = useUserStore()

  // Ensure user is loaded
  if (!userStore.user?.id) return { orders: [] }

  const data = await usePayloadQuery<OrdersQuery>(ordersQuery, {
    userId: userStore.user.id
  })

  return {
    orders: data?.Orders?.docs || []
  }
}
