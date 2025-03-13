import ListingDetails from "@/components/ListingDetails"
import PageHeader from "@/components/PageHeader"
import Error from "next/error"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function ListingPage() {
    const router = useRouter()
    const { id } = router.query
    const APP_URL = "https://listings-api-roshis-rai.vercel.app"

    const { data, error, isLoading } = useSWR(`${APP_URL}/api/listings/${id}`)

    if (isLoading) return <PageHeader text="Loading..." />

    if (error) return <Error statusCode={404} title={`Listing with ID: ${id} Could Not Be Found`}/>

    return (
        <>
            <PageHeader text={data?.name} />
            <ListingDetails listing={data} detailsPage={true}/>
        </>
    )
}