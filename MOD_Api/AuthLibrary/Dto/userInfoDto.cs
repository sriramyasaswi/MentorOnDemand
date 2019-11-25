using System;
using System.Collections.Generic;
using System.Text;

namespace AuthLibrary.Dto
{
   public class userInfoDto
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int Role { get; set; }
        public bool IsActive { get; set; }
    }
}
