import { Stack, Typography } from '@mui/material'
import type { Item } from '../items'
import ItemCard from './ItemCard'
import Section from './Section'

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <Section tone="aqua">
      <Stack spacing={1.5}>
        {items.length === 0 ? (
          <Typography color="text.secondary">Нічого не знайдено.</Typography>
        ) : (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        )}
      </Stack>
    </Section>
  )
}