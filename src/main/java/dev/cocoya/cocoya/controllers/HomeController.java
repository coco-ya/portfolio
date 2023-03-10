package dev.cocoya.cocoya.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class HomeController {

    @RequestMapping(value = "/",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getHome(){
        ModelAndView modelAndView = new ModelAndView("home");

        return modelAndView;
    }

    @RequestMapping(value = "/dios",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getDios(){
        ModelAndView modelAndView = new ModelAndView("dios");

        return modelAndView;
    }

    @RequestMapping(value = "/matzip",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getMatzip(){
        ModelAndView modelAndView = new ModelAndView("matzip");

        return modelAndView;
    }
}
