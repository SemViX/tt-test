
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import DateFilter from './components/DateFilter'
import SearchBar from './components/SearchBar'
import ItemList from './components/ItemList'
import AddItemDialog from './components/AddItemDialog'
import { useState } from 'react'
import { useItems } from './hooks/useItems'

function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const { visible, date, setDate, setQuery, addItem } = useItems()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm" sx={{ py: 3, pb: 12 }}>
        <Typography variant="h4" gutterBottom>Мої фільми</Typography>
        <Stack spacing={2}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{
              alignItems: 'stretch',
              gap: 1,
              '& > *': {
                width: '100%',
              },
              '& > :first-of-type': {
                flex: '0 0 180px',
                width: { xs: '100%', sm: 180 },
              },
              '& > :last-child': {
                flex: 1,
              },
            }}
          >
            <DateFilter value={date} onChange={setDate} />
            <SearchBar onSearch={setQuery} />
          </Stack>
          <ItemList items={visible} />
        </Stack>

         <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, p: 2, bgcolor: 'background.paper' }}>
          <Container maxWidth="sm" disableGutters>
            <Button fullWidth size="large" variant="contained" onClick={() => setDialogOpen(true)}
              sx={{ bgcolor: '#7b1fa2', '&:hover': { bgcolor: '#4a148c' } }}>
              Додати новий елемент
            </Button>
          </Container>
        </Box>

        <AddItemDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onAdd={addItem} />
      </Container>
    </LocalizationProvider>
  )
}

export default App
