import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap"

export default function ListingDetails({listing, detailsPage=false}) {
  if (!listing) return <h1>Listing Not Found!</h1>

  const {
    _id = "",
    name = "",
    images = {},
    neighborhood_overview = "",
    price = "",
    room_type = "",
    bed_type = "",
    beds = 0,
    review_scores = {},
    number_of_reviews = 0,
  } = listing;

  //Handle Image Source
  const imageSrc = images.picture_url || "https://placehold.co/600x400?text=Photo+Not+Available"

  //Format Price
  const formattedPrice = parseFloat(price).toFixed(2)


  return (
    <Container>
      <Row>
        <Col lg>
          <img 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400?text=Photo+Not+Available"
            }}
            className="img-fluid w-100"
            src={imageSrc}
            alt={`${name} - Listing Image`}
            loading="lazy"
          />
          <br />
          <br />
        </Col>
        <Col lg>
          {neighborhood_overview && (
            <>
              {neighborhood_overview}
              <br />
              <br />
            </>
          )}
          <strong>Price:</strong> ${formattedPrice}<br />
          <strong>Room:</strong> {room_type}<br />
          <strong>Bed:</strong> {bed_type} ({beds})<br /><br />
          <strong>Rating:</strong> {review_scores.review_scores_rating}/100 ({number_of_reviews} Reviews)
          <br />
          <br />
          {!detailsPage && (
            <Link href={`/listing/${_id}`}>
              <Button variant="dark"> View Listing </Button>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  )
}
