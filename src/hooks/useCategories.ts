import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories, categoriesCleanUp } from "@store/categories/CategoriesSlice";


const useCategories = () => {

  const dispatch = useAppDispatch()
  const { loading, error, record } = useAppSelector((state) => state.categories)

  useEffect(() => {
    dispatch(actGetCategories())
    return () => {
      dispatch(categoriesCleanUp())
    }
  }, [dispatch])

  return { loading, error, record }
}

export default useCategories