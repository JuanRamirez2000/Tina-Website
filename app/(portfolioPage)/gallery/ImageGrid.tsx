import CloduinaryImageWrapper from "../../components/CloudinaryImageWraper";

const MAX_COLS = 4;

export type SearchResults = {
  public_id: string;
  height: number;
  width: number;
};

export default function ImageGrid({ images }: { images: SearchResults[] }) {
  return (
    <div className="w-[90%] h-fit columns-1 md:columns-2 lg:columns-3 xl:columns-4">
      {images.map((image) => (
        <CloduinaryImageWrapper
          src={image.public_id}
          height={image.height}
          width={image.width}
          key={image.public_id}
          alt="Tina Hero Page"
          className="object-cover my-2 rounded-xl aspect-auto"
        />
      ))}
    </div>
  );
}
