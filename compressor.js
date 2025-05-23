import { brotliCompress, brotliDecompress } from 'zlib'
import { promisify } from 'util'

const brotliCompressAsync = promisify(brotliCompress)
const brotliDecompressAsync = promisify(brotliDecompress)

export async function compressString (input) {
    const compressed = await brotliCompressAsync(input)
    return compressed.toString('base64')
}

export async function decompressString (input) {
    const buffer = Buffer.from(input, 'base64')
    const decompressed = await brotliDecompressAsync(buffer)
    return decompressed.toString()
}
