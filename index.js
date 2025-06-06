import express from 'express'
import { compressString, decompressString } from './compressor.js'
import { cleanHtml } from './cleaner.js'
import cors from 'cors'

const app = express()
// app.use(express.json())

app.use(cors())
app.use(express.text())
const PORT = process.env.PORT || 3000

app.post('/api/compress', async (req, res) => {
    const input = req.body

    if (!input) return res.status(400).json({ error: 'Falta el campo' })

    try {
        const compressed = await compressString(input)
        res.json({ compressed })
    } catch (err) {
        res.status(500).json({ error: 'Error al comprimir' })
    }
})

app.post('/api/decompress', async (req, res) => {
    const input = req.body

    if (!input) return res.status(400).json({ error: 'Falta el campo' })

    try {
        const compressed = await decompressString(input)
        res.json({ compressed })
    } catch (err) {
        res.status(500).json({ error: 'Error al comprimir' })
    }
})

app.post('/api/clean', async (req, res) => {
    const input = req.body

    if (!input) return res.status(400).json({ error: 'Falta el campo' })

    try {
        const cleaned = await cleanHtml(input)
        res.json({ cleaned })
    } catch (err) {
        res.status(500).json({ error: 'Error al comprimir' })
    }
})

app.listen(PORT, async () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})
