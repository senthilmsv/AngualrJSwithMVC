using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSwithMVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Home()
        {
            return PartialView();
        }
        public ActionResult Page1()
        {
            return PartialView();
        }
        public ActionResult Page1Left()
        {
            return PartialView();
        }
        public ActionResult Page1Right()
        {
            return PartialView();
        }

        public ActionResult Page2()
        {
            return PartialView();
        }
        public ActionResult Page3()
        {
            return PartialView();
        }
    }
}