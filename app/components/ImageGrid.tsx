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
    <div className="grid grid-cols-4 gap-2">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            {column.map((image) => (
              <CloduinaryImageWrapper
                src={image.public_id}
                sizes="100vw"
                alt="Tina Hero Page"
                key={image.public_id}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}
