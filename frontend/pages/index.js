import AppLayout from "../component/Applayout";
import { useSelector } from "react-redux";
import PostForm from "../PostForm";
import PostCard from "../component/PostCard";

const home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};
export default home;
