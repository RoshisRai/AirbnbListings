import ListingDetails from "@/components/ListingDetails"
import PageHeader from "@/components/PageHeader"
import Link from "next/link"
import { Card } from "react-bootstrap"

export async function getStaticProps() {
    const APP_URL = "https://listings-api-roshis-rai.vercel.app"
    const LISTING_ID = "10006546"

    try {
        const response = await fetch(`${APP_URL}/api/listings/${LISTING_ID}`)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        return {
            props: {
                listing: data
            },
            revalidate: 86400
        }


    } catch (error) {
        console.error(error)
        
        return {
            props: {
                listing: null
            }
        }
    }
}

export default function About(props) {
    return (
        <>
            <PageHeader text="About the Developer: Roshis Rai" />
            <Card>
                <Card.Body>
                    <p>
                        My name is Roshis Rai, and I’m a 22-year-old from Ilam, Nepal. I have a strong passion for web development and artificial intelligence, and I’m always eager to explore new technologies in these fields. Currently, I’m in my final semester of a two-year diploma program in computer programming at Seneca College in Canada. I enjoy building full-stack applications using modern frameworks like Next.js and React, and I’m also interested in AI-driven solutions for web applications. Beyond coding, I like to stay updated on the latest tech trends and continuously improve my problem-solving skills. I have experience working with databases like Oracle SQL and enjoy optimizing queries for better performance. When I’m not coding, I love learning about different mythologies and occasionally experimenting with cocktail recipes. My goal is to grow as a developer and contribute to innovative projects that blend AI with web technologies.
                    </p>
                    <p>
                        One of the places I would like to visit is the: <Link href={`/listing/${props.listing?._id}`}>{props.listing?.name}</Link> (Airbnb).
                    </p>
                </Card.Body>
                <ListingDetails listing={props.listing} />
            </Card>
        </>
    )
}