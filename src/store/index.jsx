import { configureStore } from '@reduxjs/toolkit'
import  cakesSlice  from './slices/cakesData.slice'
import isLoadingSlice from './slices/isLoading.slice'
import  cakeExampleSlice  from './slices/cakeExample.slice'

export default configureStore({
  reducer: {
       loading:isLoadingSlice,
       cakes:cakesSlice,
       cakeExamples:cakeExampleSlice,
	}
})