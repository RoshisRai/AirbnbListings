/*********************************************************************************
*  WEB422 – Assignment 3
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Roshis Rai Student ID: 116516238 Date: March 12, 2025
*
********************************************************************************/ 


import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import { useEffect, useRef, useState } from "react";
import { Accordion, Alert, Pagination } from "react-bootstrap";
import useSWR from "swr";


export default function Home() {
  const [page, setPage] = useState(1)
  const [pageData, setPageData] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const alertTimerRef = useRef(null)

  const APP_URL = "https://listings-api-roshis-rai.vercel.app"

  const { data, error } = useSWR(`${APP_URL}/api/listings?page=${page}&perPage=10`)

  useEffect(() => {
    if (data) {
      setPageData(data)
    }
  }, [data])

  const previous = () => {
    if (page > 1) {
      setPage(page => page -1)
    } else {
      handleShowAlert()
    }
  }

  const next = () => {
    setPage(page => page + 1)
  }

  const handleShowAlert = (close = false) => {
    if (close) {
      setShowAlert(false)
      if(alertTimerRef.current) clearTimeout(alertTimerRef.current)
    } else {
      setShowAlert(true)

      //Clear any existing timer to prevent multiple timers
      if(alertTimerRef.current) clearTimeout(alertTimerRef.current)

      //Set a new timer to close the alert after 2 seconds
      alertTimerRef.current = setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    }
  }

  // Clean up timer when component unmounts
  useEffect(() => {
    return () => {
      if(alertTimerRef.current) clearTimeout(alertTimerRef.current)
    }
  }, [])

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {showAlert && (
        <Alert 
        variant="danger" 
        className="position-fixed top-0 start-50 translate-middle-x shadow-lg w-90"
        style={{ width: "80%", maxWidth: "800px", marginTop: "50px", zIndex: 1050 }}
        onClose={() => handleShowAlert(true)}
        dismissible
      >
        <strong>Oops! No more previous Pages.</strong>
      </Alert>
      )}

      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />

      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item eventKey={listing._id} key={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - <span>{listing.address?.street}</span>
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <br />

      <Pagination>
        <Pagination.Prev onClick={() => previous()}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={()=> next()}/>
      </Pagination>
    </>
  );
}
