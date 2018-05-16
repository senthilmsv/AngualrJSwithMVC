using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSwithMVC.Areas.Customer.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Customer/Default
        public ActionResult Index()
        {
            return View();
        }
    }
}