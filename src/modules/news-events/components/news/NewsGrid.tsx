import NewsCardLoading from "./NewsCard.loading"

interface Props {
    category: string;
}

const NewsGrid = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-5 ">
            {[...Array(3)].map((_, index) => (
                <NewsCardLoading key={index} />
            ))}
        </div>
    </div>
  )
}

export default NewsGrid