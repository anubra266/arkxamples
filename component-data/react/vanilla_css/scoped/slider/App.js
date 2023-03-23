import {
  Slider,
  SliderControl,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@ark-ui/react";

import "./styles.css";

export default function Page() {
  return (
    <Slider min={0} max={100} defaultValue={33}>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderControl>
      <SliderMarkerGroup>
        <SliderMarker value={25}>25</SliderMarker>
        <SliderMarker value={50}>50</SliderMarker>
        <SliderMarker value={75}>75</SliderMarker>
      </SliderMarkerGroup>
    </Slider>
  );
}
