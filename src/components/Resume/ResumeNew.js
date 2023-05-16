import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Umer Nasir.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadError={(e) => {
              console.log(e, "error");
            }}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.5 : 0.9} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <nav>
            <Button
              variant={pageNumber === 1 ? "primary" : "outline-secondary"}
              style={{ margin: 5 }}
              onClick={() => setPageNumber(1)}
            >
              1
            </Button>
            <Button
              variant={pageNumber === 2 ? "primary" : "outline-secondary"}
              style={{ margin: 5 }}
              onClick={() => setPageNumber(2)}
            >
              2
            </Button>
          </nav>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
