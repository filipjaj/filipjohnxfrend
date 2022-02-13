import axios from "axios";
import Title from "../../../components/Title";
import Categories from "../../../components/Categories";

const CategoryIndex = ({ categories }) => {
  return (
    <div className="grid content-center justify-center  w-screen h-screen ">
      <Title>Categories</Title>
      <Categories categories={categories} />
    </div>
  );
};

export default CategoryIndex;

export async function getStaticProps(context) {
  const categoryResult = await axios(
    "https://frend-ecom-api.azurewebsites.net/Category"
  );

  const categories = categoryResult.data;

  return {
    props: {
      categories,
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
