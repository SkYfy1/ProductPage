import { FormFields } from "../../models/formSchemas/addSchema";
import $api from "../../http";
import ProductService from "../../services/ProductService";

const submit = async (product: FormFields) => {
    const data = await ProductService.addProduct(product);

    console.log(data.data)
}

export default submit;