using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSwithMVC.Areas.Customer.Controllers
{
    public class ProfileController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }
        public ActionResult Edit()
        {
            return PartialView();
        }
    }
}