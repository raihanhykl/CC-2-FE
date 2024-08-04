import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

export default function CarouselService({}: Props) {
  return (
    <Carousel className=" w-[200px] bg-black">
      <CarouselContent className=" bg-black">
        <CarouselItem>
          <img src="cleaning.jpg" alt="" className=" object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="polishing.jpg" alt="" className=" object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="protecting.jpg" alt="" className=" object-cover" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
