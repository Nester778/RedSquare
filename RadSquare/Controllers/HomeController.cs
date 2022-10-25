using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RadSquare.Models;
using System.Data;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;

namespace RadSquare.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _config;

        public HomeController(ILogger<HomeController> logger, IConfiguration config)
        {
            _logger = logger;
            _config = config;
        }

        public IDbConnection Connection
        {
            get 
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Test()
        {
            List<string> items = new List<string>();
            items.Add(Partual("Юань", "Грн", 20));
            return View(items);
        }
        public IActionResult News()
        {
            var items = GetNews();
            return View(items);
        }
        public IActionResult Admin()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Сurrency(Сurrency сurrency)
        {
            var partual = Partual(сurrency.First, сurrency.Second, сurrency.Colv);
            return View(partual);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private List<News> GetNews() 
        {
            using (IDbConnection db = Connection)
            {
                return db.Query<News>("SELECT * FROM News").ToList(); ;
            }
        }
        
        private string Partual(string first, string second, int colv)
        {
            System.Net.WebClient wc = new System.Net.WebClient();
            string Response = wc.DownloadString("https://www.google.com.ua/search?hl=ru&s&q="+first+"+"+second+"&spell=1");
            double Rate = double.Parse(System.Text.RegularExpressions.Regex.Match(Response, @">([0-9]+\,[0-9]+)").Groups[1].Value);
            return (Rate).ToString();
        }
    }
}
