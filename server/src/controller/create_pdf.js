import { writeFileSync } from 'fs'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'



function createText(page, text, x, height, fator, font, size, color) {
  page.drawText(text,
    {
      x,
      y: height - fator,
      font,
      size, 
      color

    })
} 

// async function createImage(imageUrl, page, x, y, width, height, fator) {
//   let img = readFileSync(imageUrl)
//   page.drawImage(img,
//     {
//       x: x,
//       y: heightPage - fator,
//       width: widthImage,
//       height: heightImage
//     })
// }

async function createPdf () {
  const pdfDoc = await PDFDocument.create()
  const timesRoman = await PDFDocument.embedFont(StandardFonts.TimesRoman)
  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  console.log(width, height)
  
  page.drawText('Adicionando Texto ao Documento PDF!!!', 
    {
      x: 50,
      y: height - 40,
      font: timesRoman,
      size: 30,
      color: rgb(0, 0.5, 0.7)
    })

  // eslint-disable-next-line no-unused-expressions, no-sequences
  createText(page, 'Adicionando', 50, height, 40, timesRoman), 30, rgb(0, 0.5, 0.7)

  writeFileSync('exemplo_pdf.pdf', await pdfDoc.save())

}

createPdf().catch((err) => console.log(err))