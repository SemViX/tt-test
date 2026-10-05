import { useState, type FormEvent } from 'react'
import Section from './Section'
import { Button, Stack, TextField } from '@mui/material'

interface Props {
    onSearch: (query: string) => void
}


const SearchBar = ({ onSearch }: Props) => {
    const [draft, setDraft] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSearch(draft)
    }

    return (
        <Section tone='green' component="form" onSubmit={handleSubmit} sx={{ flex: 1, minWidth: 220 }}>
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    width: '100%',
                    alignItems: 'center',
                    minHeight: 40,
                }}
            >
                <TextField
                    label="Пошук"
                    size="small"
                    fullWidth
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    sx={{
                        bgcolor: '#fff',
                        flex: 1,
                        '& .MuiInputBase-root': {
                            height: 40,
                        },
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        bgcolor: '#2e7d32',
                        '&:hover': { bgcolor: '#1b5e20' },
                        whiteSpace: 'nowrap',
                        minWidth: 96,
                        height: 40,
                        px: 2,
                    }}
                >
                    Шукати
                </Button>
            </Stack>
        </Section>
    )
}

export default SearchBar