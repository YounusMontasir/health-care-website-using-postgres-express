import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./user.service";

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
    const {page, limit,  searchTerm, sortBy, sortOrder, role, status} = req.query;
    const result = await UserService.getAllFromDB({page: Number(page), limit: Number(limit),  searchTerm, sortBy, sortOrder, role, status});
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