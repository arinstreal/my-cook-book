import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
}

export default function handler(  req: NextApiRequest,
                                  res: NextApiResponse<Data>) {
  res.setPreviewData({})
  res.end('Preview mode enabled')
}