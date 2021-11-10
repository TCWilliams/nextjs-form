

let fields = 3
export default function handler(req, res) {
  if (req.query.increment) {
    fields += +req.query.increment
  }

  res.status(200).json([...Array(fields).keys()])
}
