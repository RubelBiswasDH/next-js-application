// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const blogs: any = 
    [
        {
            "slug": "can-bring-you-closer-to-your-financial-goal",
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "MarketWatch",
            "title": "Mutual Funds Weekly: These money and investing tips can bring you closer to your financial goal",
            "description": "Money and investing stories popular with MarketWatch readers over the past week.",
            "url": "https://www.marketwatch.com/story/these-money-and-investing-tips-can-bring-you-closer-to-your-financial-goal-ad5c7ebf",
            "urlToImage": "https://images.mktw.net/im-678652/social",
            "publishedAt": "2023-07-22T12:23:36Z",
            "content": "Sign up here to get MarketWatchs best mutual funds and ETF stories emailed to you weekly!Investors are being reminded that AI is not going to become an immediate or a major revenue contributor for mo… [+2586 chars]"
        },
        {
            "slug": "Space-Force-raises-the-stakes-as-rocket-companies-compete",
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "Space Force raises the stakes as rocket companies compete for lucrative military missions",
            "description": "The U.S. military is raising the stakes — and widening the field — on a high-profile competition for Space Force mission contracts. The Space Force plans to buy even more rocket launches from companies in the coming years than previously expected, granting mo…",
            "url": "https://biztoc.com/x/a1c1025f6d652050",
            "urlToImage": "https://c.biztoc.com/p/a1c1025f6d652050/s.webp",
            "publishedAt": "2023-07-22T12:16:04Z",
            "content": "The U.S. military is raising the stakes and widening the field on a high-profile competition for Space Force mission contracts. The Space Force plans to buy even more rocket launches from companies i… [+303 chars]"
        },
        {
            "slug": "Issues-With-Elon-Musk-AI-Safety-Plan",
            "source": {
            "id": null,
            "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Experts Explain the Issues With Elon Musk's AI Safety Plan",
            "description": "Elon Musk owns and/or operates plenty of companies, from Twitter to SpaceX, xAI, Neuralink, The Boring Company and Tesla (TSLA) - Get Free Report. The world's richest man holds bachelor’s degrees in both physics and economics. But just as Musk is no astrophys…",
            "url": "https://biztoc.com/x/fd5ac86f4571b316",
            "urlToImage": "https://c.biztoc.com/p/fd5ac86f4571b316/s.webp",
            "publishedAt": "2023-07-22T12:10:06Z",
            "content": "Elon Musk owns and/or operates plenty of companies, from Twitter to SpaceX, xAI, Neuralink, The Boring Company and Tesla (TSLA) - Get Free Report. The world's richest man holds bachelors degrees in b… [+297 chars]"
        }
    ]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(blogs)
}
