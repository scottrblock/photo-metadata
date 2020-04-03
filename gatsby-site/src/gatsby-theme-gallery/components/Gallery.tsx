/** @jsx jsx */
import * as React from "react";
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { Lightbox } from "react-modal-image";
// import { Grid, Tile } from "gatsby-theme-gallery";
import Grid from "./Grid";
import Tile from "gatsby-theme-gallery/src/components/Tile";
import useGallery from "../../hooks/useGallery"
import map from 'lodash/map';

const imgStyles: any = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    transition: "transform 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};

const Gallery = () => {
  const years = useGallery();
  const [largeUrl, setLargeUrl] = React.useState<
    number | undefined
  >(undefined);

  return (
    <div>
      {map(Object.keys(years).reverse(), (year) =>
        <div key={year}>
          <h2>{year}</h2>
    
          { map(Object.keys(years[year]).sort((a, b) => parseInt(b) - parseInt(a)), (month) =>
            <div key={month}>
              <h3>{month}</h3>
              <Grid key={month}>
                { map(years[year][month], (node, day) =>
                  <Tile key={node.id} onClick={() => { setLargeUrl(node.publicURL) }} >
                    <Img alt={node.name} fluid={node.fluid} {...imgStyles} />
                  </Tile>
                )}
              </Grid>
            </div>
          )}
        </div>
      )}

      {largeUrl !== undefined && (
        <Lightbox
          hideDownload={true}
          large={largeUrl}
          onClose={() => {
            setLargeUrl(undefined);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
