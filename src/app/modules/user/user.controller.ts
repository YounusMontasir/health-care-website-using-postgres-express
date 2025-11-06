import { pick } from "zod/v4/core/util.cjs";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./user.service";
import { fi } from "zod/v4/locales";

const createPatient = catchAsync(async (req, res) => {
   const result = await UserService.createPatient(req);
   
sendResponse(res, {
    statusCode: 201,
    success: true, 
    message: "Patient created successfully",
    data: result
})
})

const createDoctor = catchAsync(async (req, res) => {
   const result = await UserService.createDoctor(req);
   
sendResponse(res, {
    statusCode: 201,
    success: true, 
    message: "Doctor created successfully",
    data: result
})
})

const getAllFromDB = catchAsync(async(req, res)=>{
    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']);
    const filters = pick(req.query, ['email', 'role', 'status']);
    const result = await UserService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All users fetched successfully",
        data: result
    })  
})

export const UserController = {
    createPatient,
    createDoctor,
    getAllFromDB
}