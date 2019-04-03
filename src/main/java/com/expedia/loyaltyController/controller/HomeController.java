package com.expedia.loyalt.controller;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RestController
public class HomeController {



    @RequestMapping(value= "/validate/{id}/{pwd}" , method = RequestMethod.GET)

//    @CrossOrigin("localhost:4200")

   public String loginValidate(@PathVariable("id") String userId,@PathVariable("pwd") String pwd)

            {


        if(userId.equals("debarati")){
           if(pwd.equals("1234")) {
               return "ok";
           }

           else{
               return "password wrong";
           }

        }

        return "not ok";



    }

    @RequestMapping("/vld")
    @CrossOrigin("http://localhost:4200")
    public String vld(@RequestParam("id") String userId,@RequestParam("pwd") String pwd){
        return "Super";
    }

//loyaltyweb/src/main/web/loyaltyview/package.json

}
