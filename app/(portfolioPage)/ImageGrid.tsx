import CloduinaryImageWrapper from "../components/CloudinaryImageWraper";

const MAX_COLS = 4;

export type SearchResults = {
  public_id: string;
};

export default function ImageGrid({ images }: { images: SearchResults[] }) {
  const getColumns = (coldIndex: number) => {
    return images.filter((_, idx) => idx % MAX_COLS === coldIndex);
  };
  return (
    <div className="grid w-screen h-screen grid-cols-4 gap-2">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div className="flex flex-col w-full h-full gap-2" key={idx}>
            {column.map((image) => (
              <figure key={image.public_id} className="relative w-1/3 h-full">
                <CloduinaryImageWrapper
                  src={image.public_id}
                  alt="Tina Hero Page"
                  key={image.public_id}
                  className="object-cover rounded-xl"
                />
              </figure>
            ))}
          </div>
        )
      )}
    </div>
  );
}
